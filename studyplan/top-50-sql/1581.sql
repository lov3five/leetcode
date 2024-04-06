# Write your MySQL query statement below
select V.customer_id, count(V.visit_id) as count_no_trans
from Visits V
where V.visit_id not in (select visit_id from Transactions)
group by V.customer_id