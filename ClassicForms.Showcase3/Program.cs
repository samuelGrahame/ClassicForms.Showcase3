using ClassicForms.Showcase3.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

using System.Windows.Forms;

namespace ClassicForms.Showcase3
{
    public class Program
    {
        public async static Task Main()
        {
            Settings.UseNameForInputPlaceholders = true;

            await Form.LoadResourcesAsync(Assembly.GetExecutingAssembly());

            new frmImage().Show();
        }
    }
}
