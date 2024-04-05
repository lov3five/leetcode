-- Write your PostgreSQL query statement below
select V.author_id as id
from Views V
where V.author_id = V.viewer_id
group by id
order by id asc
