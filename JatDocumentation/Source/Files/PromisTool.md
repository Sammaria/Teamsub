#Promis Tool

##1. Introduction

Promis Tool is a Java Console Application, which creates the Editorial and Aim & Scope data using Elsevier XML feed and update the Journal databases. 


##2. Overview
Tool does the following activities:

- Iterates through the Journal database setup.
- Check the Promis feed in Elsevier cloud.
- Extracts Chief Editor information and update the Journal databases.
- Extracts Aim & Scope information using XPath and update the Journal databases.
- Extracts the Editorial info and create HTML using XSLT and updates the Journal databases.


##3. How to run the Tool
Detailed Documentation and source code can be found at <a href="https://github.com/ElsevierTechnologyServices/STMJ-JAT-PROMIS">Github</a>.
The syntax for running the Promis tool using **command line:** java -jar STMJ-JAT-PROMIS.jar &lt;path of config file&gt;.

##4. Messages/Emails
Promis Tool will send the status via E-Mail notifications. The main cause of error is missing <a href="http://www.elsevier.com/xml_store">XML feed</a>. 




