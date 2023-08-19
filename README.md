### React
The frontend of Siren is built using React and TailwindCSS. `index.js` is the entry point to the application which starts the application on port 3000.

### Landing Page
The landing page should look like the image below.
![landing](https://github.com/mushroom-hat/Siren-Frontend/blob/main/public/landing.png)

### Running Locally

```bash
npm start
```

Deployment:
1) node run build
2) Apply the Terraform Infrastructure [here](https://github.com/mushroom-hat/Siren-Terraform)
3) Upload build directory to provisioned S3 bucket configured for static website hosting
4) Add S3 bucket as CNAME record in DNS registrar.
