INSERT INTO personskills
SELECT people.personid, skills.skillid
FROM people, skills
WHERE people.email = 'nicholas.blows@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'nicholas.blows@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'paul.doyle@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'paul.doyle@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'lee.gordon@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'lee.gordon@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'ian.noonan@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'ian.noonan@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'matthew.quinton@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'matthew.quinton@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'john.watson@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'john.watson@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'john.watson@rpa.gov.uk' AND skills.skill = 'Node.js'
   OR people.email = 'scott.dormand@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'scott.dormand@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'fay.toward@rpa.gov.uk' AND skills.skill = 'C#'
   OR people.email = 'fay.toward@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'fay.toward@rpa.gov.uk' AND skills.skill = 'Node.js'
   OR people.email = 'paul.fazackerley@rpa.gov.uk' AND skills.skill = 'Node.js'
   OR people.email = 'paul.fazackerley@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'tim.butterworth@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'mike.johnson@rpa.gov.uk' AND skills.skill = 'SQL'
   OR people.email = 'marc.solomon@rpa.gov.uk' AND skills.skill = 'SQL';
