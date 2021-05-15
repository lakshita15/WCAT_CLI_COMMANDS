#WCAT-COMMANDS
CLI = > command line interface 
i have made some commands that do the following tasks:-

-s --->> is used to remove all the empty lines from file 
-n --->> is used to add numbers to various lines
-b --->> is used to not assign any number to the empty lines
-w --->> is used to write one file to another file without changing its own content.
-ws --->> is used to write second file by fully replacing it with the content of file 1


#SYNTAX AND CASES
-s 
wcat -s filename 

-b
wcat -b filename 

-n
wcat -n filename 
CASES:--
case1 :- if  it has -b and -n both then output will depend upon the preference by checking the index of n and b 

wcat -n-b filename (n is first priority and VICE VERSA)

case2 :- if -n is present but -b is not present

case3:-only -b present

-w
wcat filname1 -w filename2
filename1 = the file you want to read and write in file2
filename2 = the file in which you want to add the contents of file1 without changing its initial content 

-ws
wcat filname1 -ws filename2
filename1 = the file you want to read and write in file2
filename2 = the file in which you want to add the contents of file1. It deletes all the previous content of 2 file and writes the content of file 1