using {user10 as dbschema} from '../db/schema';

@path: 'service/user10'

service User10info @(requires: 'authenticated-user') {
    entity Address @(restrict: [{
        grant: '*',
        to   : 'User10Admin'
    }]) as projection on dbschema.Address;

    entity Employee @(restrict: [{
        grant: '*',
        to   : 'User10Admin'
    }]) as projection on dbschema.Employee;

    entity EmployeeDetails @(restrict: [{
        grant: '*',
        to   : 'User10Admin'
    }]) as projection on dbschema.EmployeeDetails;
}
