Project Overview

Project Name:

COVID-Tracker

Project Description

This application will allow users to view up-to-date counts of infections, hospitalizations, recoveries, and mortalities due to COVID-19.  Users can select the country of their choosing to view regional statistics as well as allow them to submit current symptoms they may be experiencing if they are feeling under the weather.

Wireframes

Basic layout: https://www.figma.com/file/i1q41fnrnLBoTZvmX8GAZp/Untitled?node-id=0%3A1

App Landing Page:
https://www.figma.com/file/1zsr5bAyoyAaMhyziKwp1t/COVID-Tracker-Home-Page

Global Data Page:
https://www.figma.com/file/pncYtJ03NmjVZKnLaD1WiW/Global-Data-Page

Country Data Page:
https://www.figma.com/file/Jw2QZ1RV54Qq7WdDDExpUD/Country-Data-Page?node-id=0%3A1

AirTable: https://airtable.com/invite/l?inviteId=inv1rcRsVLaEFiWsm&inviteToken=8e79b5770a2692511004dbd0f8483dce66619f4fc84787eb21a909f883ada37c

Component Hierarchy

		  App.js
			/       \
		   App.css   Components
			      /  |   | \
			 Symptom	 |   |	Stats by Country
			Input Section|
				     |
				Dashboard
                (Cumulative Global Stats)


API and Data Sample:

covid-19-tracking.p.rapidapi.com


218 items
[100 items
0:{8 items
"Active Cases_text":"8,013,012"
"Country_text":"World"
"Last Update":"2020-10-08 18:20"
"New Cases_text":"+247,466"
"New Deaths_text":"+4,287"
"Total Cases_text":"36,636,500"
"Total Deaths_text":"1,064,280"
"Total Recovered_text":"27,559,208"
}
1:{8 items
"Active Cases_text":"2,581,172"
"Country_text":"USA"
"Last Update":"2020-10-08 18:20"
"New Cases_text":"+22,892"
"New Deaths_text":"+427"
"Total Cases_text":"7,799,116"
"Total Deaths_text":"217,208"
"Total Recovered_text":"5,000,736"
}
2:{8 items
"Active Cases_text":"894,531"
"Country_text":"India"
"Last Update":"2020-10-08 18:20"
"New Cases_text":"+69,787"
"New Deaths_text":"+980"
"Total Cases_text":"6,902,775"
"Total Deaths_text":"106,534"
"Total Recovered_text":"5,901,710"
}

MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

MVP

Be a working, interactive React app, built using create react app.
Utilize React Router, installed via NPM.
Have at least 6 separate, rendered components.
Implement an organized and understandable React file structure.
Utilize functional and class React components appropriately.
Use Axios to consume data from Airtable, and GET/render that data in your components.
Use Axios to POST/create new data on Airtable.
Use only React for DOM Manipulation.

Display COVID statistical data by country.
Display global, cumulative, COVID statistics 
Include a user submission box where they may enter symptoms they may be experiencing to inform of possible local outbreaks.


PostMVP

When a user submits symptoms related to COVID, a warning message displays regarding a possible local outbreak.


Day	Deliverable	Status
October 9	Prompt / Wireframes / Timeframes	Complete
October 13	Project Approval	Incomplete
October 13	Core Application Structure (HTML, CSS, JS.)	Incomplete
October 14	Pseudocode / actual code	Incomplete
October 15	Initial Clickable Model	Incomplete
October 16	MVP	Incomplete
October 17	Presentations	Incomplete
Timeframes



Component	Priority	Estimated Time	Time Invested	Actual Time
Adding Core structure	H	4hrs	0hrs	0hrs
Adding Components	H	4hrs	0hrs	0hrs
Rendering Data tables	H	6hrs	0hrs	0hrs
Rendering Data charts	H	6hrs	0hrs	0hrs
Integrating AirTable	H	4hrs	0hrs	0hrs
Adding Input Form	H	4hrs	0hrs	0hrs
Working with API	H	4hrs	0hrs	0hrs
Working with CSS	H	8hrs	0hrs	0hrs
Total	H	40hrs	0hrs	0hrs

SWOT Analysis

Strengths:
Fortunate to have found a reliable API that supplies great data.  

Weaknesses:
I feel that I might struggle with incorporating AirTable into the project.

Opportunities:
If time and skill allows, I'd like to display a warning message on the app if a COVID outbreak is occuring locally.

Threats:
Time.