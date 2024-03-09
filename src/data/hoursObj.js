export default [
    {
        header: 'Total Hours',
        description: 'Overall hours you have actually worked during the month.',
        shiftType: 'hours',
    },
    {
        header: 'Only Night Hours',
        description: 'Specifically and ONLY night hours you have or will work during the month. For example a typical night shift (00:00 - 08:00) has only 6 hours of night shift, giving you 6 hours of extra salary.',
        shiftType: 'nightHours',
    },
    {
        header: 'Bonus Shift Hours',
        description: 'Similar to night hours. This field is for ONLY bonus hours. Usually 8 hours per shift, unless you are working from 20:00 to 04:00 for example.',
        shiftType: 'doubleHours',
    },
    
]