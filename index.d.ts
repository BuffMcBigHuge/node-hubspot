// Type definitions for hubspot 1.3.0
// Project: https://github.com/MadKudu/node-hubspot

import { RequestCallback } from 'request'
import { RequestPromise } from 'request-promise'

import { Company } from './lib/typescript/company'
import { Contact } from './lib/typescript/contact'
import { Page } from './lib/typescript/page'
import { OAuth } from './lib/typescript/oauth'
import { Deal } from './lib/typescript/deal'
import { Engagement } from './lib/typescript/engagement'
import { Integrations } from './lib/typescript/integrations'
import { Owner } from './lib/typescript/owner'
import { Pipeline } from './lib/typescript/pipeline'
import { List } from './lib/typescript/list'
import { File } from './lib/typescript/file'
import { Subscription } from './lib/typescript/subscription'
import { Campaign } from './lib/typescript/campaign'
import { Broadcast } from './lib/typescript/broadcast'
import { CRM } from './lib/typescript/crm'
import { Emails } from './lib/typescript/emails'
import { Form } from './lib/typescript/form'

interface BaseOptions {
  baseUrl?: string
}

export interface BottleneckOptions {
  maxConcurrent?: number | null;
  minTime?: number;
  highWater?: number | null;
  reservoir?: number | null;
  reservoirRefreshInterval?: number | null;
  reservoirRefreshAmount?: number | null;
  reservoirIncreaseInterval?: number | null;
  reservoirIncreaseAmount?: number | null;
  reservoirIncreaseMaximum?: number | null;
  [key: string]: any;
}

export interface LimiterOptions {
  limiter?: BottleneckOptions
}

export interface ApiOptions extends BaseOptions, LimiterOptions {
  apiKey: string
}

export interface AccessTokenOptions extends BaseOptions, LimiterOptions {
  accessToken: string
}

export interface AppOptions extends BaseOptions {
  clientId: string
  clientSecret: string
  redirectUri: string
  refreshToken: string
}

export interface HubspotError {
  status: string
  message: string
  correlationId: string
  requestId: string
}

declare class Hubspot {
  constructor(options?: ApiOptions | AccessTokenOptions | AppOptions)
  companies: Company
  contacts: Contact
  pages: Page
  deals: Deal
  engagements: Engagement
  integrations: Integrations
  owners: Owner
  oauth: OAuth
  pipelines: Pipeline
  lists: List
  files: File
  subscriptions: Subscription
  campaigns: Campaign
  broadcasts: Broadcast
  crm: CRM
  emails: Emails
  forms: Form
}

export default Hubspot
