select * from Emplyeetrainee

sp_help Emplyeetrainee

select distinct Department from Emplyeetrainee

alter Table Emplyeetrainee Add Location nvarchar(15)

update Emplyeetrainee set Location='Mumbai';

sp_rename 'Emplyeetrainee.EmpID' , 'EmployeeID'

select * from Emplyeetrainee where department in ('Sales','Shipping')

select * from Emplyeetrainee where HireDate BETWEEN '01-Jan-1991' AND  '01-Jan-1998'

Select * Into EmployeeDemo From Emplyeetrainee Where 1 = 2

Select * from EmployeeDemo

select * from Emplyeetrainee where Training > 40

delete from Emplyeetrainee where Training > 60

ALTER TABLE Emplyeetrainee
DROP COLUMN HireDate;

ALTER TABLE Emplyeetrainee
ALTER COLUMN Department varchar(34);

INSERT INTO Emplyeetrainee (Name, Department,Training)
VALUES ('Digvijay','IT',25)




	