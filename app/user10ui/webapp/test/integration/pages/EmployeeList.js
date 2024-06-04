sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sap.learning.user10ui',
            componentId: 'EmployeeList',
            contextPath: '/Employee'
        },
        CustomPageDefinitions
    );
});