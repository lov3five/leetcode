-- Write your PostgreSQL query statement below
select A1.machine_id, avg(A2.timestamp - A1.timestamp)::numeric(10,3) as processing_time
from Activity as A1, Activity as A2
where A1.process_id = A2.process_id
and A1.machine_id = A2.machine_id
and A1.timestamp < A2.timestamp
group by A1.machine_id