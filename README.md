# learn-progressive-enhancement

Learn the *craft* of building websites/apps progressively for all devices!

If you have read Medium or Twitter in the last few months,
you'll be forgiven for thinking that all web applications are built
as single-page apps which manage stare on the client the client.

## What?

> "*first load should be extremely quick, then immediately be cached*"

## How?

> Tutorial: https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/

First change into `/demo/pwa-weather` e.g: `cd demo/pwa-weather/`
Then run a simple web server with `python -m SimpleHTTPServer 8000`
then visit: http://localhost:8000/step-04/

You should expect to see something like this:

![pwa-weather-demo-step-04](https://cloud.githubusercontent.com/assets/194400/15094655/06567e26-14a3-11e6-865a-1ae55a325f75.png)

Mobile:
![weather-01](https://cloud.githubusercontent.com/assets/194400/15094854/118371fe-14a9-11e6-93b0-7ad02d567d33.png)

To run the `step-05` code, first `cd demo/pwa-weather/step-05` then `python -m SimpleHTTPServer 8000`
and visit: http://localhost:8000/ in your browser.

![pwa-weather-demo-step-05-working](https://cloud.githubusercontent.com/assets/194400/15094934/2c107db2-14ab-11e6-8f32-59850a9b6764.png)


## Background Reading

+ Progressive enhancement is still important:
https://jakearchibald.com/2013/progressive-enhancement-still-important/
+ Introduction to Service Workers:
http://www.html5rocks.com/en/tutorials/service-worker/introduction/
+ Can we *use* Service Workers?
http://caniuse.com/#feat=serviceworkers 53% at time of writing (***No IOS***)
