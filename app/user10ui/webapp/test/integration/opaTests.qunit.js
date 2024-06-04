sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/learning/user10ui/test/integration/FirstJourney',
		'sap/learning/user10ui/test/integration/pages/EmployeeList',
		'sap/learning/user10ui/test/integration/pages/EmployeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeList, EmployeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/learning/user10ui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeList: EmployeeList,
					onTheEmployeeObjectPage: EmployeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);