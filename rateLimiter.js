const rateLimitMap=new Map();
const WINDOW_SIZE=60*1000;  // 1 minute
const MAX_REQUESTS=5;   // maximum allowed 5 requests per window

function rateLimiter(req,res,next){ // Middleware
    const ip=req.ip;
    const currentTime=Date.now();

    if(!rateLimitMap.has(ip)){
        rateLimitMap.set(ip,[]);
    }

    const timeStamps=rateLimitMap.get(ip);
    while(timeStamps.length && currentTime-timeStamps[0]>WINDOW_SIZE){
        timeStamps.shift();
    }
    if(timeStamps.length>=MAX_REQUESTS){
        return res.status(429).json({
            error:"Too Many Requests comes. try again Later."
        });
    }
    timeStamps.push(currentTime);
    rateLimitMap.set(ip,timeStamps);
    next();
}
module.exports=rateLimiter;