this is a simple implementation on sharing dependencies and components or everything with webpack and module federation to create microfrontends easy and simple.
it seems to me that is not as reliable because things happen all the time but still is a great tool.

reference `https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71`

steps: 
- first of all you asynchronously load the entry points for both apps, by moving it to a different file (ex: bootstrap.js or .ts or whatever) so you wont have race conditions when loading js chunks.

- create whatever component or hook you like

- override the default webpack config provided by CRA

- for more info head out to the specific webpack configs

Now there are still some errors present on the console but those can be fixed with some webpack configs, as i lost the .env files provided from CRA, also declare some modules if you are using typescript to not @ts-ignore the lazy imports

if you fail to `webpack serve` make sure that in your app tsconfig.json you have disabled the noEmit property under compilerOptions as it doesnt allow code to be compiled under isolatedModules or whatever stuff that i dont know

i modified the scripts from react-scripts to webpack serve, but feel free to use craco whenever you feel like it, its also better as you dont lose some functionality.

still this has a lot to improve because there are many usecases for example handling errors etc.So in plain words it acts as a script tag which imports code from a cdn but this imports directly from your app without the need of some external servers.

you can share hooks, css files, whatever
