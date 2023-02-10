import { differenceInCalendarYears } from 'date-fns';

export function calculateAge(birthDate) {
	return differenceInCalendarYears(Date.now(), new Date(birthDate));
}
