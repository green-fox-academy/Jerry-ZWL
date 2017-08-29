echo "jerry" > 1.text
cat 1.text > 2.text
cat < 1.text
wc -w < index.html
cat index.html | wc -w
sort index.html
sort index.html > sorted_index.html
sort tasks.txt | uniq -u
cat tasks.txt |grep basic
cat tasks.txt |grep -v basic
