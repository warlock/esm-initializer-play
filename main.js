import fs from 'fs'

export default async () => {
  const res = await fs.promises.readFile('./bu.txt', 'utf8')
  console.log(res)
}
