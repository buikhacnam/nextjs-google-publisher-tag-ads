type GoogleTag = {
    googletag: googletag.Googletag
}

export type GPTWindow = Window & typeof globalThis & GoogleTag
