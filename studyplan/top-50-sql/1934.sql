-- Write your PostgreSQL query statement below
select S.user_id,  
        round
        (
            (sum
                (
                    case 
                    when C.action = 'confirmed' then 1
                    else 0 end
                ) *  1.0/ count(*)
            )
        , 2) as confirmation_rate
from Signups S
left join Confirmations C on C.user_id = S.user_id
group by S.user_id
