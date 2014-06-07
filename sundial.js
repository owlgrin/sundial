/*!
 * Sundial v0.1
 * Date/Time formatting functions
 * MIT license
 * 
 * sundial.formattedDate(new Date()) -> Aug 20
 * sundial.formattedTime(new Date()) -> 2:11pm
 * sundial.formattedDateTime(new Date()) -> Aug 20 @ 2:11pm
 * sundial.humanDiff('2014-11-02T20:08:11.551Z ') -> Yesterday at 8:08pm
 */

(function(window) {
	'use strict';
	
	window.sundial = {
		formattedDate: function(date) {
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

			return months[date.getMonth()] + ' ' + date.getDate();
		},
		formattedTime: function(time) {
			var hours = time.getHours(),
				minutes = time.getMinutes(),
				ampm = 'am';

			if(hours > 12) {
				ampm = 'pm';
				hours = hours % 12; // 14 hours => 2 pm
			}
			if(minutes < 10) {
				minutes = '0' + minutes; // padding with zero for single digit
			}

			// 2:45pm
			return hours + ':' + minutes + ampm;
		},
		formattedDateTime: function(datetime) {
			// Jun 7 @ 2:45pm
			return this.formattedDate(datetime) + ' at ' + this.formattedTime(datetime);
		},
		humanDiff: function(time) {
			time = new Date(time),
			now = new Date(),
			diff = (now.getTime() - time.getTime()) / 1000,
			day_diff = Math.floor(diff / 86400); // 3600 * 24 = 86400

			if (isNaN(day_diff) || day_diff < 0) { // if the time passed was not correct
				return formattedDateTime(time);
			}

			return day_diff == 0 && (
				diff < 60 && 'Just now' ||
				diff < 120 && 'A minute ago' ||
				diff < 3600 && Math.floor(diff / 60) + ' minutes ago' ||
				diff < 7200 && 'An hour ago' ||
				diff < 86400 && Math.floor(diff / 3600) + ' hours ago'
			) ||
			day_diff == 1 && 'Yesterday at ' + this.formattedTime(time) ||
			day_diff > 1 && this.formattedDateTime(time);
		}
	}
})(window);