import { Account } from '../types'

export async function ensureAccount(account: string) {
  let data = await Account.get(account.toLowerCase())
  if (!data) {
    data = new Account(account.toLowerCase())
    await data.save()
  }
  return data
}

export async function getAccount(account: string) {
  const data = await Account.get(account)
  return data
}
