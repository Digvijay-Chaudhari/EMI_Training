select * from EmplyeeTest
select * from EmplyeeTest where FirstName not like '[a-p]%'
select * from EmplyeeTest where Gender like '%le' and len(gender)=4

select * from EmplyeeTest where FirstName  like 'A%' and len(FirstName)=5

select distinct Department from EmplyeeTest

select max(Salary),min(Salary) from EmplyeeTest

select top 1 * from EmplyeeTest

select * from EmplyeeTest where FirstName in('Vikas','Ashish','Nikhil')

select * from EmplyeeTest where FirstName not in('Vikas','Ashish','Nikhil')

select rtrim(FirstName) from EmplyeeTest

select FirstName,substring(Gender,1,1) as Gender from EmplyeeTest

select concat(hello,FirstName) as FirstName  from EmplyeeTest

select max(Salary) from EmplyeeTest where Salary < (select max(Salary) from EmplyeeTest)