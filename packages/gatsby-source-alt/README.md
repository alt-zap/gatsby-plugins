# Gatsby Source Alt

Creates Nodes for Firebase entities. Used on the Alt project.

Sample configuration: 
```javascript
{
  projectId: process.env.PROJECT_ID,
  privateKeyId: process.env.PRIVATE_KEY_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
  clientId: process.env.CLIENT_ID,
  authUri: process.env.AUTH_URI,
  tokenUri: process.env.TOKEN_URI,
  authCertUrl: process.env.AUTH_CERT_URL,
  clientCertUrl: process.env.CLIENT_CERT_URL,
}
```

Sample Env File:
```shell
PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY="private_key"
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_CERT_URL=
CLIENT_CERT_URL=
```

It's important to keep the private key **under " "** if you're using `dotenv`.