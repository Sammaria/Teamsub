/**
 * @api {get} /webservice/index.php/app2/index All AIP
 * @apiName All AIP
 * @apiVersion 0.1.0
 * @apiGroup Mobile Application API
 * @apiDescription API will return all the Articles in Press for the specific App-ID & Journal.
 * @apiParam {String} appid Application ID generated by Jat 4.0.
 * @apiParam {Number} jid Journal ID.
 * @apiParam {String} urlcode Must equal "aip". 
 *
 * @apiSuccess {Date} date Server current timestamp.
 * @apiSuccess {Number} STATUS Status for the response.
 * @apiSuccess {String} MESSAGE Status message for the response.
 * @apiSuccess {Object[]} ARTICLES Array of ARTICLE Objects.

 * @apiSuccess (ARTICLE Object){Number} article_id  Article ID.
 * @apiSuccess (ARTICLE Object){String} article_title Article Title.
 * @apiSuccess (ARTICLE Object){String} authors Author of the Article.
 * @apiSuccess (ARTICLE Object){String} html_file_name HTML file name of the Article.
 * @apiSuccess (ARTICLE Object){String} abstract Abstract of the Article.
 * @apiSuccess (ARTICLE Object){Date}   date_of_release  Date of release of the Article.
 * @apiSuccess (ARTICLE Object){String} article_sub_type Article Sub Type.
 * @apiSuccess (ARTICLE Object){String} article_type Article Type.
 * @apiSuccess (ARTICLE Object){String} pdf_file_name PDF file name for Article.
 * @apiSuccess (ARTICLE Object){String} keywords Keywords for the Article.
 * @apiSuccess (ARTICLE Object){Boolean} isArticleInPress Defines whether Article is in Press.
 * @apiSuccess (ARTICLE Object){String} page_range Page range of the Article.
 * @apiSuccess (ARTICLE Object){Date} last_modify Last modified time of the Article.      
 * @apiSuccess (ARTICLE Object){String} article_info_id Article info number.        	
 * @apiSuccess (ARTICLE Object){Number} Sequence Sequence number for the Article in Press.        
 * @apiSuccess (ARTICLE Object){String} DOI Date of issue of the Article.  
 * @apiSuccess (ARTICLE Object){String} DOI_Link Link for date of issue of the Article.          	
 * @apiSuccess (ARTICLE Object){String} Video Video of the Article.      
 * @apiSuccess (ARTICLE Object){Number} version Version number of the Article.    
 * @apiSuccess (ARTICLE Object){Number} v40  Processsing 2.x, 3.x, 4.x.
 * @apiSuccess (ARTICLE Object){Boolean} is_supplement  Defines whether Article is supplement.
 * @apiSuccess (ARTICLE Object){Boolean} is_abstract  Defines whether Article has abstract.
 * @apiSuccess (ARTICLE Object){String} citation_text  Citation HTML text string.       
 * @apiSuccess (ARTICLE Object){Number} filesize_fulltext Size of full text.    
 * @apiSuccess (ARTICLE Object){Number} filesize_abstract Size of abstract text.       
 * @apiSuccess (ARTICLE Object){Number} filesize_pdf Size of pdf.    
 * @apiSuccess (ARTICLE Object){Number} filesize_suppl Size of supplement.        	
 * @apiSuccess (ARTICLE Object){String} copyright  Copyright for the Article.        	
 * @apiSuccess (ARTICLE Object){Boolean} has_video  Defines whether Article has video.    
 * @apiSuccess (ARTICLE Object){Boolean} has_audio  Defines whether Article has audio.       	
 * @apiSuccess (ARTICLE Object){Boolean} has_image  Defines whether Article has image.      
 * @apiSuccess (ARTICLE Object){Boolean} has_others  Defines whether Article has other content.   
 * @apiSuccess (ARTICLE Object){Object[]} AUTHORS Array of AUTHOR Objects.
 * @apiSuccess (ARTICLE Object){Object[]} REFERENCES Array of REFERENCE Objects.
 * @apiSuccess (ARTICLE Object){Object[]} ARTICLE_MEDIAS Array of ARTICLE_MEDIA Objects.

 * @apiSuccess (AUTHOR Object){Number} author_id Author ID.        	
 * @apiSuccess (AUTHOR Object){String} author_name  Author Name.        	
 * @apiSuccess (AUTHOR Object){String} author_description  Author Description.   
 * @apiSuccess (AUTHOR Object){Date} last_modified  Last modified time.  



 * @apiSuccess (REFERENCE Object){Number} reference_id Reference ID.        	
 * @apiSuccess (REFERENCE Object){String} section_id  Section ID.        	
 * @apiSuccess (REFERENCE Object){String} section_title  Section title.   
 * @apiSuccess (REFERENCE Object){Boolean} is_this_sub_section  Defines whether it is a sub-section. 
 * @apiSuccess (REFERENCE Object){Date} last_modified  Last modified time.  

 * @apiSuccess (ARTICLE_MEDIA Object){String} media_type  Defines the Media Type.        	
 * @apiSuccess (ARTICLE_MEDIA Object){String} media_thumb_image_name  Media image name.        	
 * @apiSuccess (ARTICLE_MEDIA Object){String} media_file_name  Media file name.        	
 * @apiSuccess (ARTICLE_MEDIA Object){String} media_text  Media description. 
 * @apiSuccess (ARTICLE_MEDIA Object){String} media_caption  Media caption. 
 * @apiSuccess (ARTICLE_MEDIA Object){Boolean} deleted  Defines whether it is deleted.     
        	

 * @apiSuccessExample Success-Response:
 * {
 *    "date": "2013-08-19 12:36:58",
 *    "STATUS": "1",
 *    "MESSAGE": "Data Found",
 *    "ARTICLES": [
 *        {
 *           "article_id": "1",
 *           "issue_id": "0",
 *           "article_title": "Pregnancies and deliveries per fresh cycle are no longer adequate indicators of in vitro fertilization program quality: how should registries adapt?",
 *           "authors": "David R. Meldrum M.D.",
 *           "html_file_name": "main.html",
 *           "abstract": "",
 *           "date_of_release": "2013-08-03",
 *           "article_sub_type": "",
 *           "article_type": "",
 *           "pdf_file_name": "main.pdf",
 *           "keywords": "",
 *           "isArticleInPress": "1",
 *           "page_range": "",
 *           "last_modify": "2013-08-06 14:54:23",
 *           "article_info_id": "S0015028213027489",
 *           "Sequence": "0",
 *           "DOI": "10.1016/j.fertnstert.2013.07.1969",
 *           "DOI_Link": "http://dx.doi.org/10.1016/j.fertnstert.2013.07.1969",
 *           "Video": "0",
 *           "version": null,
 *           "v40": "4",
 *           "is_supplement": "0",
 *           "is_abstract": "0",
 *           "citation_text": "</head>Article Title Pregnancies and deliveries per fresh cycle are no longer adequate indicators of in vitro fertilization program quality: how should registries adapt?\n Authors David R. Meldrum M.D. Source Fertility and Sterility - Aug 2013 DOI: 10.1016/j.fertnstert.2013.07.1969 </body></html>",
 *           "filesize_fulltext": "6135",
 *           "filesize_abstract": "0",
 *           "filesize_pdf": "77961",
 *           "filesize_suppl": "0",
 *           "copyright": "© 2013 American Society for Reproductive Medicine",
 *           "doctopic_role": "",
 *           "has_video": 0,
 *           "has_audio": 0,
 *           "has_image": 0,
 *           "has_others": 0,
 *           "AUTHORS": [
 *               {
 *                   "author_id": "1",
 *                   "author_name": "David R. Meldrum M.D.",
 *                   "author_description": "Reproductive Partners Medical Group, Redondo Beach, California",
 *                   "last_modified": "2013-08-06 14:54:23"
 *               }
 *           ],
 *           "REFERENCES": [
 *               {
 *                   "reference_id": "1",
 *                   "section_id": "xbib5",
 *                   "section_title": "References",
 *                   "is_this_sub_section": "1",
 *                   "last_modified": "2013-08-06 14:54:22"
 *               }
 *           ],
 *           "ARTICLE_MEDIAS": [
 *               {
 *                   "media_type": "Image",
 *                   "media_thumb_image_name": "gr1.jpg",
 *                   "media_file_name": "gr1.jpg",
 *                   "media_text": "",
 *                   "media_caption": "Figure 1</b> Replica of Sigmund Freud's couch, where patients presenting with endometriosis-like symptoms were often diagnosed with hysteria.</b>",
 *                   "deleted": "0"
 *               },
 *               {
 *                   "media_type": "Image",
 *                   "media_thumb_image_name": "gr2.jpg",
 *                   "media_file_name": "gr2.jpg",
 *                   "media_text": " ",
 *                   "media_caption": "Figure 2</b> Experts on medieval medicine describe this late 13th-century image from a medical textbook as one depicting a case of uterine suffocation, a disease profile with many similarities to endometriosis.</b>",
 *                   "deleted": "0"
 *               },
 *               {
 *                   "media_type": "Image",
 *                   "media_thumb_image_name": "gr3.jpg",
 *                   "media_file_name": "gr3.jpg",
 *                   "media_text": "",
 *                   "media_caption": "Figure 3</b> In the Hippocratic Corpus several gynecological symptoms are mentioned, which bear striking similarity to those of endometriosis, including uterine ulcers, adhesions, and infertility.</b>",
 *                   "deleted": "0"
 *               }
 *           ]
 *       }
 *   ]
 *}
 * @apiError {Date} date Server current timestamp.
 * @apiError {String} MESSAGE Error Message.
 * @apiError {Number} STATUS Error Status Code.
 *
 * @apiErrorExample Error-Response:
 * {
 *	 "date": "2013-08-19 11:39:00",
 *	 "MESSAGE": "No Data Found. Journal id or Application id is either empty or wrong.",
 *	 "STATUS": "0"
 * }   
 */