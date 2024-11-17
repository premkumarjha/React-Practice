//**************isme hamne jo azure login implemnt uke concepts *********************** */

//Note ====>debugging is best way .....debug then....else kab tak dusre se ..aaj na kal 10-15 year exp hoga like anshk....so ...debug and undertsnad


/*  ********************concepts  

suppose .>azure login authorization endpoint  ->oath/azure/abcde and logout ->V1/logout ->given by backedn tem

suppsoe ->requirement ->we will call user details API, if it will give 200->will land to home page(payemt page)and if 400 then will redirect to azure login authentication.

suppose ->requiement=>if session expired(yaha session bhi backend hi handke) then it willredirectd to azure login authozation page;


1.> yaha ye jo dono end point hai azure login auth and logiut inke page pane or component pane project repo me nahi ..so isko apne routing me dalna bhi no worth, 
,even isko Navigate kiya no worth Q ki navigate wo page reload or refresh nahi karta. so 

,in these scenario, we will use window.location.href='https/dev_or_sit_project_url/AZURE_ENDPOINTS_GIVEN_BY BACKEND_TEAM', But isko direct use karne se acha ki ak custom redirect menthod banao and usmentiond me ye karo.

2.>in scenarion me jo protcted route page hoga, waha bhi if authrorized to outlet ye sahi but else me null or k=else likho mat Q ki if unaoth (401)
and 401 pe azure login auth page pe redieect jo page apne projet or apne control or ye nahi hai, so we will wite as below..


3.>hamne am custom redirectTo() banaya Q ki azure endpoint pe jo page render wo apne project me nahi, so hame yaha windeo.location.href, navigate and all page reload or refresh nahi krta but heme yaha ye condioj me page yaha....location.href.

.




App.js:
************
<Routes>
<Route element={ProtectedRoute />}>
<Route path="/" exact element ={<Navigate to={"/payamentFile"} />} />
<Route path="/paymentFile" element={<PayementFiles />} />
<Route path="/actSnap" element={<ActivitySnapshot />} />
<Route path="*" element={<PageNotFound />} />
</Route>
</Routes>



ProtectedRoute.js:
*****************

const AUTH_URL='https/dev_or_sit_project_url/AZURE_ENDPOINTS_GIVEN_BY BACKEND_TEAM'

useEffect(()=>{
    if(!isLoading && status ===200){
    sessionStorage.setItem('login','true');
    navigate("/paymentFile")
    }
    if(!isLoading && status ===410){
    sessionStorage.setItem('login','false');
    redirectTO(AUTH_URL);//================================================>tjis is main and vvvviimmp , Q ki yehai main kaam ka hai ....
    }
    },[status])


const isAuthenticated=sessionStorage.getItem('login');

return isAuthenticated === 'true' ? <Outlet /> : null; //==========>else null , Q ki if authenticate nahi to 401, and 401 pe jo endpoint uska page apne projectme {app isme routing hai } nahi, wo to azure page, and so isiliye hamne yaha  null and useEffect me 401 pe redirect to wo azure....





Redirecttopage:
********************

.>export const redirectTo =()=>{
    
    if(url){
    window.location.href=url;
    }}






*/




