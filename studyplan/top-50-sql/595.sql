-- Write your PostgreSQL query statement below
select W.name, W.population, W.area
from World W
where area >= 3000000 or population >= 25000000