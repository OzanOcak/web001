---
title: "Deployment of Next.JS App into Vercel"
date: "2023-01-31"
author: "ozan ocak"
tags: ["React", "Next.Js", "Vercel"]
subtitle: "We will create the most basic react app with react,react-dom and babel libraries..."
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
