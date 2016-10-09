export default class DateTimePicker
{

	create(input, dateFormat)
	{
		if (typeof input.datetimepicker !== 'function') {
			throw new Error('Mesour dateTimePicker reuqire jQuery.fn.datetimepicker');
		}
		input.datetimepicker({
			format: dateFormat,
			focusOnShow: false,
			hide: function() {
				input.focus();
			},
			useCurrent: false
		});
	};

	/**
	 * @param {jQuery} input
	 */
	show(input)
	{
		input.data("DateTimePicker").show();
	};

	/**
	 * @param {jQuery} input
	 */
	hide(input)
	{
		input.data("DateTimePicker").hide();
	};

	/**
	 * @param {jQuery} input
	 */
	destroy(input)
	{
		if (input.data("DateTimePicker")) {
			input.data("DateTimePicker").destroy();
		}
	};

}