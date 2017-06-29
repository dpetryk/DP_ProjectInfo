using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DP_ProjectInfo.Startup))]
namespace DP_ProjectInfo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
