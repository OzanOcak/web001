---
title: "Deployment of Next.JS App into Vercel"
date: "2023-01-31"
author: "ozan ocak"
tags: ["React", "Next.Js", "Vercel"]
subtitle: "Setting up vercel cli makes deployment easier,first we need install vercel via npm then
we can deploy it with vercel command..."
---

## Deployment of Next.JS App into Vercel

Setting up vercel cli makes deployment easier,first we need install vercel via npm then
we can deploy it with vercel command

```console
npm i -g vercel

vercel
vercel --prod

```

From vercel, we can go settings tab than evironment variables to enter .env variables

.env

```console
NEXT_PUBPLIC_SAMPLE=
NEXT_PUBPLIC_PASS=
```

or we can use verl cli to add environtment variables into the vercel

```console
vercel env add NEXT_PUBPLIC_SAMPLE
```

### Domain Name:

Under Settings we need to enter our domain name into input container. Then we need to configure our
domain. Than we need to get **CNAME** and **A** records from varcel and enter them into dns records in our desired hosting company.

Nove we can deploy our github code into production with **vercel --prod** command
