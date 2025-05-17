
filetype=$1

# iter through [5 10 15 20 50 100 200 500]

for i in 5 10 15 20 50 100 200 500
do
  pnpm generate -t interviewers -n $i -f $filetype --interviewer-prefix INT --filename "public/samples/$filetype/INT/$i"
  pnpm generate -t interviewees -n $i -f $filetype --interviewee-prefix EE --filename "public/samples/$filetype/EE/$i"
done

# num=$1
# filetype=$2
# pnpm generate -t interviewers -n $num -f $filetype --interviewer-prefix INT --filename "public/samples/$filetype/INT/$num"
# pnpm generate -t interviewees -n $num -f $filetype --interviewee-prefix EE --filename "public/samples/$filetype/EE/$num"