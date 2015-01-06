#ETL Tool

##1. Introduction

ETL Tool is a Java console application, which transforms XML articles to HTML format and transcodes the videos and images into mobile friendly formats.


##2. Overview
Tool does the following activities:

- Iterates through extracted dataset.
- Processes Journals.
- Extracts metadata information from Issue XML files and save into database.
- Create cover images for issues.
- Transforms article xml files using XSLT and create HTML packages.
- Transcodes all video formats into .mp4 format.
- Creates the following .zip packages for Apps to download.
	- Full text
		- Consists of html, tables and images.
	- PDF
		- PDF version of articles.
	- Abstract
		- Abstract html.
	- Supplementary
		- Consists of Audios, Videos, Supplementary PDF's, Doc's, and Presentation's etc.


##3. How to run the Tool
Detailed Documentation and source code can be found at <a href="https://github.com/ElsevierTechnologyServices/STMJ-JAT-Server-DTD">Github</a>.

The syntax for running the ETL tool using **command line**: java -jar JAWS.jar &lt;path of the extracted tar files&gt; &lt;path of the config file (setting.config)&gt; false &lt;PII1,PII2,..&gt;

Jar file accepts four parameters, all parameters are space separated. If there is any space within the parameter, that should be enclosed in double quotes.The parameters are:

- Complete path of the extracted Tar files to process.
- Complete path of the configuration file.
- True/false for sending individual email alert after processing each issue [Optional].
- Comma separated PII numbers of the articles to be processed (in case of reprocessing only selected files due to any entity/other errors) [Optional].

##4. Process Flow

- Run the tool daily/ specific interval.
- Process all the tar files received after the previous processing time.
- Iterates through each tar files.
- Iterates through each ISSN folders in each tar files.
- Process the articles.
- Call Elsevier Notification API after processing each ISSN(Journal).
- Sends an Issue-wise email notification about product_id and price.
- Sends a summary email after processing each tar file.
- Uploads a CSV file to an FTP Server with complete details of the processed articles.

##5. Messages/Emails
###5.1 Summary Emails
ETL Tool sends a summary email after processing each tar files. This email contains issue-wise listing of:

- Dataset
- ISSN
- Journal Name
- Status
- Volume
- Issue
- Total Articles
- Processed Articles
- Product ID
- Price

This email alert sometimes contains an error log file. We logs two types of messages. These logs are attached as EWError.log. Email subject line explains the messages like:

- KIW00000000000832 Processed with Warning(s)
- KIW00000000000832 Processed with Errors(s)
- KIW00000000000832 Processed with Warning(s) and Error(s)

###5.2 Warning
Tool throws warning on following three conditions:

- There is no body available in XML file.
	- Warning : S1542356513010604	java.lang.Exception: No XML body Exists, Not Processed.
- Processed a published article once and after that if we are processing the AIP version of that particular article.
	- Warning : S1542356513010604	java.lang.Exception: Published Article Processed Already.
- An unknown named entity appears in XML file. We have stored a possible list of entities in main.ent file. If a new entity appears in XML file, tool will throw an error but will process the content. But there may be chances of missing HTML content. So this kind of warnings should be taken care of and need to re-process the specific article after entering the new entity in main.ent file.
	- Warning : S1542356513010604	org.xml.sax.SAXParseException; lineNumber: 1; columnNumber: 2991; The entity z.hearts was referenced, but not declared.
	
###5.3 Errors
All other exceptions occur while processing the files will be logged and emailed to all concerned authorities. These messages should be taken seriously and should be reported to KiwiTech.

###5.4 Individual Issue-wise Email
ETL Tool sends an email alert after processing an issue with the same above fields, but this can be turned on/off using the command line parameters of the tool by switching the parameter to true/false.

**Command:** java -jar JAWS.jar &lt;path of the extracted tar files&gt; &lt;path of the config file (setting.config)&gt; false.




