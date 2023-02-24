# App Data Model Reference
📆 *Generated: Wed, 22 Feb 2023 15:17:11 GMT*

This document lists all the tables and their columns available from our database.

Each table is specified with:
- **Name**: Table name.
- **Description**: Table description.
- **Key**: The technical teble name.

Each column is specified with:
- **Name**: Column name.
- **Description**: Column description.
- **Key**: The technical column name.
- **Type**: Column type.
- **Allow null**: Does the column allows null values.
- **Auto increment**: Does the column is an auto-increment ID.
- **Primary key**: Is the column a primary key.


## Organizations
Description: *Organizations information*

Table: `organizations`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Organization system (internal) ID | `id` | UUID | false | undefined | true |
| Name | Organization name (From the tenant display name) | `name` | STRING | true | undefined | undefined |
| Tenant ID | Microsoft tenant ID | `tenant_id` | UUID | false | undefined | undefined |
| Multigeo | If the Microsoft tenant has multigeo enabled | `multigeo` | BOOLEAN | true | undefined | undefined |
| Language | Microsoft tenant preferred language | `preferred_language` | STRING | true | undefined | undefined |
| Marketing mails | Marketing mails from the Microsoft tenant | `marketing_mails` | JSONB | true | undefined | undefined |
| Security mails | Security mails from the Microsoft tenant | `security_mails` | JSONB | true | undefined | undefined |
| Technical mails | Technical mails from the Microsoft tenant | `technical_mails` | JSONB | true | undefined | undefined |
| Initial domain | Microsoft tenant initial domain (defined at creation time) | `tenant_initial_domain` | STRING | true | undefined | undefined |
| Default domain | Microsoft tenant default domain | `tenant_default_domain` | STRING | true | undefined | undefined |
| Region scope | Microsoft tenant region scope | `tenant_region_scope` | STRING | true | undefined | undefined |
| Region sub scope | Microsoft tenant region sub scope | `tenant_region_sub_scope` | STRING | true | undefined | undefined |
| City | Organization city | `city` | TEXT | true | undefined | undefined |
| Country | Organization country | `country` | STRING | true | undefined | undefined |
| Country code | Organization country code | `country_code` | STRING | true | undefined | undefined |
| Default usage location | Organization default usage location | `default_usage_location` | STRING | true | undefined | undefined |
| Postal code | Organization postal code | `postal_code` | STRING | true | undefined | undefined |
| Street | Organization street | `street` | TEXT | true | undefined | undefined |

## Users
Description: *Users information*

Table: `users`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | User system (internal) ID | `id` | UUID | false | undefined | true |
| User ID | Microsoft user ID | `object_id` | UUID | false | undefined | undefined |
| Tenant ID | Microsoft tenant ID | `tenant_id` | UUID | true | undefined | undefined |
| Intercom hash | Intercom hash | `intercom_hash` | TEXT | true | undefined | undefined |
| Tenant admin | If the user is a tenant admin | `tenant_admin` | BOOLEAN | true | undefined | undefined |
| City | User city | `city` | TEXT | true | undefined | undefined |
| Company name | User company name | `company_name` | TEXT | true | undefined | undefined |
| Country | User country | `country` | TEXT | true | undefined | undefined |
| Department | User department | `department` | TEXT | true | undefined | undefined |
| Display name | User display name | `display_name` | TEXT | true | undefined | undefined |
| Email | User email | `email` | STRING | true | undefined | undefined |
| Given name | User given name | `given_name` | TEXT | true | undefined | undefined |
| Job title | User job title | `job_title` | TEXT | true | undefined | undefined |
| Preferred language | User preferred language | `preferred_language` | TEXT | true | undefined | undefined |
| Surname | User surname | `surname` | TEXT | true | undefined | undefined |
| User principal name | User principal name | `user_principal_name` | STRING | true | undefined | undefined |
| Usage location | User usage location | `usage_location` | STRING | true | undefined | undefined |
| Roles | User roles | `roles` | JSONB | true | undefined | undefined |

## Teams Templates
Description: *Microsoft Teams teams templates*

Table: `teams_templates`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| ID | Team template ID | `id` | UUID | false | undefined | true |
| Tenant ID | Microsoft tenant ID | `tenant_id` | STRING | false | undefined | undefined |
| Name | Team template name | `name` | STRING | false | undefined | undefined |
| Description | Team template description | `description` | STRING | true | undefined | undefined |
| Picture URL | Team template picture URL | `picture_url` | STRING | true | undefined | undefined |
| Enabled | If the team template is enabled | `enabled` | BOOLEAN | false | undefined | undefined |
| Language | Language of the team template | `language` | STRING | true | undefined | undefined |
| Native template ID | Native (Managed by Microsoft Teams) template ID | `native_template_id` | STRING | true | undefined | undefined |
| Native template name | Native (Managed by Microsoft Teams) template name | `native_template_name` | STRING | true | undefined | undefined |
| Approval policy enabled | If the team template requires an approval | `approval_policy_enabled` | BOOLEAN | false | undefined | undefined |
| Approval policy team | List of members of the approval team | `approval_policy_team` | JSONTYPE | true | undefined | undefined |
| Minimum members | Minimum number of members | `membership_policy_minimum_members` | INTEGER | true | undefined | undefined |
| Minimum owners | Minimum number of owners | `membership_policy_minimum_owners` | INTEGER | true | undefined | undefined |
| Permanent members | List of permanent members | `membership_policy_permanent_members` | JSONTYPE | true | undefined | undefined |
| Permanent owners | List of permanent owners | `membership_policy_permanent_owners` | JSONTYPE | true | undefined | undefined |
| Requester as team owner | If the requester is added as team owner | `membership_policy_requester_as_team_owner` | BOOLEAN | false | undefined | undefined |
| Privacy | Privacy of the team | `security_policy_privacy` | STRING | false | undefined | undefined |
| Sensitivity labels enabled | If sensitivity labels are enabled | `security_policy_sensitivity_labels_enabled` | BOOLEAN | false | undefined | undefined |
| Sensitivity labels | Sensitivity labels of the team | `security_policy_sensitivity_labels_templating_expression` | STRING | true | undefined | undefined |
| Lifecycle policy enabled | If lifecycle policy is enabled | `lifecycle_policy_enabled` | BOOLEAN | true | undefined | undefined |
| Inactivity threshold | Inactivity threshold | `lifecycle_policy_inactivity_threshold` | INTEGER | true | undefined | undefined |
| Expiration threshold | Expiration threshold | `lifecycle_policy_expiration_threshold` | INTEGER | true | undefined | undefined |
| Action | Lifecycle policy action | `lifecycle_policy_action` | STRING | true | undefined | undefined |
| Audience targeting enabled | If audience targeting is enabled | `audience_targeting_enabled` | BOOLEAN | true | undefined | undefined |
| Audience targeting | Audience targeting of the team | `audience_targeting_templating_expression` | STRING | true | undefined | undefined |
| Source team ID | Microsoft ID of the source team | `source_team_oid` | STRING | true | undefined | undefined |
| Source team name | Name of the source team | `source_team_name` | STRING | true | undefined | undefined |
| Target team name | Templating expression that defines the target team name | `target_team_name_templating_expression` | STRING | true | undefined | undefined |
| Target team description | Templating expression that defines the target team description | `target_team_description_templating_expression` | STRING | true | undefined | undefined |
| Target team welcome message | Templating expression that defines the target team welcome message | `target_team_welcome_message_templating_expression` | STRING | true | undefined | undefined |
| Target team email | Templating expression that defines the email of the underlying group of the target team | `target_team_email_templating_expression` | STRING | true | undefined | undefined |
| Target team default name | Default name of the target team | `target_team_default_name` | STRING | true | undefined | undefined |
| Target team default description | Default description of the target team | `target_team_default_description` | STRING | true | undefined | undefined |
| Target team default welcome message | Default welcome message of the target team | `target_team_default_welcome_message` | STRING | true | undefined | undefined |

## Teams Service Credentials
Description: *Microsoft Teams service credentials*

Table: `teams_service_credentials`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Teams service credentials system (internal) ID | `id` | UUID | false | undefined | true |
| Type | Type of credentials. Could be  | `type` | STRING | false | undefined | undefined |
| Tenant ID | Microsoft tenant ID | `tenant_id` | STRING | false | undefined | undefined |
| Service account ID | Microsoft user ID of the service account | `service_account_oid` | STRING | true | undefined | undefined |
| Service account name | Name of the service account | `service_account_name` | STRING | true | undefined | undefined |
| Service account UPN | Microsoft UPN of the service account | `service_account_upn` | STRING | true | undefined | undefined |
| Service account access token | Access token of the service account | `service_account_access_token` | TEXT | true | undefined | undefined |
| Service account refresh token | Refresh token of the service account | `service_account_refresh_token` | TEXT | true | undefined | undefined |
| Service account expired | If the service account access token and refresh token have expired | `service_account_expired` | BOOLEAN | true | undefined | undefined |
| Granted permissions | Permissions granted to the credentials | `granted_permissions` | JSONB | true | undefined | undefined |
| Missing permissions | Permissions missing to the credentials | `missing_permissions` | JSONB | true | undefined | undefined |

## RBAC
Description: *Role-based access control*

Table: `rbac`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | RBAC (internal) ID | `id` | UUID | false | undefined | true |
| Tenant ID | Microsoft tenant ID | `tenant_id` | STRING | false | undefined | undefined |
| Catalog manager | Catalog manager role | `catalog_manager` | JSONB | false | undefined | undefined |
| Integration manager | Integration manager role | `integration_manager` | JSONB | false | undefined | undefined |
| Subscriptions manager | Subscriptions manager role | `subscriptions_manager` | JSONB | false | undefined | undefined |
| Compliance manager | Compliance manager role | `compliance_manager` | JSONB | false | undefined | undefined |
| Governance manager | Governance manager role | `governance_manager` | JSONB | false | undefined | undefined |
| Change manager | Change manager role | `change_manager` | JSONB | false | undefined | undefined |

## Microsoft Teams teams
Description: *Microsoft Teams teams information*

Table: `teams`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Team system (internal) ID | `id` | INTEGER | false | true | true |
| Visibility | Team visibility | `visibility` | STRING | true | undefined | undefined |
| Archived | If the team is archived | `archived` | BOOLEAN | true | undefined | undefined |
| Deleted | If the team is deleted | `deleted` | BOOLEAN | true | undefined | undefined |
| Last activity | Last activity date as reported by Microsoft | `last_activity_date` | DATE | true | undefined | undefined |
| Inactivity | Date at which the team will be marked as inactive | `inactivity_date` | DATE | true | undefined | undefined |
| Inactive | If the team is inactive | `inactive` | BOOLEAN | true | undefined | undefined |
| Expiration | Date at which the team will be marked as expired | `expiration_date` | DATE | true | undefined | undefined |
| Expired | If the team is expired | `expired` | BOOLEAN | true | undefined | undefined |
| System Template ID | System (internal) ID of the template associated with the team | `template_id` | UUID | true | undefined | undefined |
| Native Template ID | Native (Microsoft Teams) ID of the template used to create the team | `native_template_id` | STRING | true | undefined | undefined |
| Metadata | Team metadata | `metadata` | JSONB | true | undefined | undefined |
| Tenant ID | Microsoft tenant ID | `tid` | UUID | false | undefined | undefined |
| Team ID | Microsoft team ID | `oid` | UUID | false | undefined | undefined |

## Microsoft Teams channels
Description: *Microsoft Teams channels information*

Table: `microsoft_teams_channels`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Channel system (internal) ID | `id` | INTEGER | false | true | true |
| Channel ID | Microsoft channel ID | `object_id` | UUID | true | undefined | undefined |
| Membership type | Channel membership type | `membership_type` | STRING | true | undefined | undefined |
| Metadata | Channel metadata | `metadata` | JSONB | true | undefined | undefined |
| Tenant ID | Microsoft tenant ID | `tid` | UUID | false | undefined | undefined |
| Channel ID | Microsoft channel ID | `oid` | STRING | false | undefined | undefined |
| Team ID | Microsoft team ID | `team_oid` | UUID | false | undefined | undefined |
| Membership type | Channel membership type | `membershipType` | STRING | true | undefined | undefined |

## Microsoft Teams channel chat messages
Description: *Microsoft Teams channel chat messages information*

Table: `microsoft_teams_channel_chat_messages`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Channel message system (internal) ID | `id` | INTEGER | false | true | true |
| Message ID | Microsoft channel message ID | `object_id` | UUID | true | undefined | undefined |
| Metadata | Channel message metadata | `metadata` | JSONB | true | false | false |
| Tenant ID | Microsoft tenant ID | `tid` | UUID | false | false | false |
| Message ID | Microsoft channel message ID | `oid` | STRING | false | false | false |
| Team ID | Microsoft team ID | `team_oid` | UUID | false | false | false |
| Channel ID | Microsoft channel ID | `channel_oid` | STRING | false | false | false |

## Microsoft Graph subscriptions
Description: *Microsoft Graph subscriptions information*

Table: `graph_subscriptions`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Microsoft Graph subscription system (internal) ID | `id` | UUID | false | undefined | true |
| Object ID | Microsoft Graph subscription ID | `object_id` | UUID | true | undefined | undefined |
| Change type | Microsoft Graph subscription change type | `change_type` | STRING | false | false | false |
| Notification URL | Microsoft Graph subscription notification URL | `notification_url` | STRING | false | false | false |
| Resource | Microsoft Graph subscription resource | `resource` | STRING | false | false | false |
| Expiration | Microsoft Graph subscription expiration | `expiration` | DATE | false | false | false |
| Tenant ID | Microsoft tenant ID | `tid` | UUID | false | false | false |
| Object ID | Microsoft Graph subscription ID | `oid` | UUID | false | false | false |

## Subscriptions
Description: *Subscriptions information*

Table: `subscriptions`

Columns:
| Name | Description | key | Type | Allow null | Auto increment | Primary key |
|:-----|:------------|:----|:-----|:----------:|:--------------:|:-----------:|
| System ID | Subscription system (internal) ID | `id` | UUID | false | undefined | true |
| Status | Subscription status | `status` | STRING | false | undefined | undefined |
| Plan | Subscription plan | `plan` | STRING | false | undefined | undefined |
| Quantity | Subscription quantity | `quantity` | INTEGER | false | undefined | undefined |
| Origin | Subscription origin | `origin` | STRING | false | undefined | undefined |
| MS ID | Microsoft subscription ID | `ms_subscription_id` | STRING | true | undefined | undefined |
| MS beneficiary email | Microsoft beneficiary email | `ms_beneficiary_email` | STRING | true | undefined | undefined |
| MS beneficiary ID | Microsoft beneficiary user ID | `ms_beneficiary_object_id` | STRING | true | undefined | undefined |
| MS beneficiary tenant ID | Microsoft beneficiary tenant ID | `ms_beneficiary_tenant_id` | STRING | true | undefined | undefined |
| MS purchaser email | Microsoft purchaser email | `ms_purchaser_email` | STRING | true | undefined | undefined |
| MS purchaser ID | Microsoft purchaser user ID | `ms_purchaser_object_id` | STRING | true | undefined | undefined |
| MS tenant ID | Microsoft purchaser tenant ID | `ms_purchaser_tenant_id` | STRING | true | undefined | undefined |
