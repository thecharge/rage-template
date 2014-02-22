/*
* Rage template engine
* Creator: Radoslav Sandov
* Email: thecharge@gmail.com
* Simple JavaScript template engine saving time in development
* License: GNU GPL v3.0
* https://www.gnu.org/copyleft/gpl.html
*/
var rageTemaplteEngine = 
	function()
	{
		var obj = this;
		this.matcher = function(templateScript, vars)
		{
			var operationsRegEx = /\{\{(.+?)\}\}/gi;
			if(templateScript.match(operationsRegEx))
			{
				$.each(
					templateScript.match(operationsRegEx),
					function(k, v)
					{
						
						var exec = v.replace('{{','').replace('}}','');
						templateScript = templateScript.replace(v, eval(exec));
					}
				);

			}
			
			return templateScript;
		}
		
		this.render = function(what,vars)
		{
			if(!vars)
			{
				vars = {};
			}
			
			var $return = '';
			$.ajaxSetup({
			  async: false,
			});			
			$.post(
				$('script[type=template]').prop('src'),
				{}
				,
				function(response)
				{
					//console.log(response);
					$return = obj.matcher(response, vars)
				}
			);
			$.ajaxSetup({
			  async: true,
			});
			
			return $return;
		}
	}