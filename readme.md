# WCAT-COMMANDS  
-CLI = > command line interface   
-I have made some commands that do the following tasks:-  

<code>-s</code> --->> is used to remove all the empty lines from file   
<code>-n</code> --->> is used to add numbers to various lines   
<code>-b</code> --->> is used to not assign any number to the empty lines   
<code>-a</code>--->> is used to write one file to another file without changing its own content.  
<code>-ws</code> --->> is used to write second file by fully replacing it with the content of file 1 and deleting blank lines   
<code>-r</code> --->> is used to rename the file      
<code>-w</code> --->> is used to write one file to other  

# **SYNTAX AND CASES**  
<b>-s</b>      
<code>wcat -s filename</code>      
  
<b>-b</b>  
<code>wcat -b filename</code>     
<b>-r</b>    
<code>wcat -r filename</code>     

<b>-n</b>  
<code> wcat -n filename</code>     
CASES:--  
case1 :- if  it has -b and -n both then output will depend upon the preference by checking the index of n and b   
   
wcat -n-b filename (n is first priority and VICE VERSA)  
   
case2 :- if -n is present but -b is not present  
  
case3:-only -b present  
  
<b>-w</b>  
<code>wcat filname1 -w filename2</code>    

<b>-a</b>  
filename1 = the file you want to read and write in file2  
filename2 = the file in which you want to add the contents of file1 without changing its initial content   
  
<b>-ws</b>    
<code>wcat filname1 -ws filename2 </code>     
filename1 = the file you want to read and write in file2   
filename2 = the file in which you want to add the contents of file1. It deletes all the previous content of 2 file and writes the content of file 1 by deleting blank lines 
