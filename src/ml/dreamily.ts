import {
  log,
}                 from 'wechaty'
import {
  Vorpal,
  CommandContext,
  Args,
}                           from 'wechaty-vorpal'

import {
  dreamilyApi,
  DreamilyApiOptions,
  StoryStyle,
}                       from './dreamily-api'

function Dreamily () {
  log.verbose('WechatyVorpalFriday', 'Dreamily()')

  return function DreamilyExtension (vorpal: Vorpal) {
    log.verbose('WechatyVorpalFriday', 'DreamilyExtension(vorpal)')

    vorpal
      .command('Dreamily <content>', '彩云小梦 Dreamily 帮你续写小说！')
      .option('-s --style [style]', 'Style of the story: ' + Object.keys(StoryStyle).join(', '))
      .action(dreamilyAction)
  }
}

interface DreamilyOptions {
  style?: StoryStyle
}

async function dreamilyAction (
  this: CommandContext,
  args: Args
): Promise<number> {
  log.verbose('WechatyVorpalFriday', 'dreamilyAction("%s")', JSON.stringify(args))

  const options = args.options as any as DreamilyOptions

  const content = args.content as string

  const style: StoryStyle = options.style
    ? options.style in StoryStyle
      ? options.style
      : StoryStyle.imaginative
    : StoryStyle.imaginative

  const apiOption: DreamilyApiOptions = {
    content,
    style,
  }

  this.stdout.next(`Dreamily is continuing to write he novel for you: "${content}" ...`)
  const reply = await dreamilyApi(apiOption)
  this.stdout.next(reply)
  this.stdout.next('Thanks for ask Dreamily for writing, you are welcome to try more if you like it!')

  return 0
}

export { Dreamily }
