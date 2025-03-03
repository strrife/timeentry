﻿/* http://keith-wood.name/timeEntry.html
   Lithuanian initialisation for the jQuery time entry extension
   Written by Andrej Andrejev */
export default function($) {
	$.timeEntry.regionalOptions['lt'] = {show24Hours: true, separator: ':',
		ampmPrefix: '', ampmNames: ['AM', 'PM'],
		spinnerTexts: ['Dabar', 'Ankstesnis laukas', 'Kitas laukas', 'Daugiau', 'Mažiau']};
	$.timeEntry.setDefaults($.timeEntry.regionalOptions['lt']);
}
