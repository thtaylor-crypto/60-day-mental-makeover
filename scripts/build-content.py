from pathlib import Path
import json,re
chapters=['Meet Your Mind','Rewrite the Script','Emotional Fluency','Break the Loop','Self-Talk & Identity','Stress to Strength','Social & Digital Boundaries','Motivation Without Burnout','Failure & Forgiveness','Future Self Journaling','Resilience Rituals','Owning Your New Mind']
rows=[]
for i,line in enumerate(Path('scripts/content.txt').read_text().splitlines()):
 a=line.split('|');assert len(a)==9,(i+1,len(a))
 title,obj,learn,example,practice,reflect,options,correct,model=a
 rows.append(dict(day=i+1,chapter=i//5+1,title=title,objective=obj,learn=learn,example=example,practice=practice,reflection=reflect,options=options.split(';'),correct=int(correct),model=[v.strip() for v in re.split(r' → | ↔ | ≠ | \+ ',model)],takeaway=obj.rstrip('.')))
assert len(rows)==60
Path('public/content.json').write_text(json.dumps(dict(version='1.0.0',language='en',chapters=chapters,lessons=rows),ensure_ascii=False,indent=2))
