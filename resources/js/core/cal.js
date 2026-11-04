import moment from 'moment';
import momentz from 'moment-timezone';

/** $cal — date helpers used across pages (moment + timezone aware). */
export default {
    now: () => moment(),
    format: (value, fmt = 'DD MMM YYYY') => (value ? moment(value).format(fmt) : ''),
    fromNow: (value) => (value ? moment(value).fromNow() : ''),
    toUTC: (value, tz) => (value ? momentz.tz(value, tz || momentz.tz.guess()).utc().format('YYYY-MM-DD HH:mm:ss') : ''),
    fromUTC: (value, tz) => (value ? momentz.utc(value).tz(tz || momentz.tz.guess()).format('YYYY-MM-DD HH:mm:ss') : ''),
    ranges: {
        today: () => [moment().startOf('day'), moment().endOf('day')],
        thisWeek: () => [moment().startOf('week'), moment().endOf('week')],
        thisMonth: () => [moment().startOf('month'), moment().endOf('month')],
        thisYear: () => [moment().startOf('year'), moment().endOf('year')],
    },
};
