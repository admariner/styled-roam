import hotkeys from 'hotkeys-js'
import tippy from 'tippy.js'
import toggleCalendarTimestamp from './calendar'
import { toggleFocusMode } from './focus'
import { appendIcon, switchTo } from './utils/helper'
import { shareAndDownloadImage } from './utils/share-image'

const initialMode = localStorage.getItem('INIT_MODE') || 'document'
document.querySelector('html').classList.add(initialMode)

appendIcon('cardList', function () {
  switchTo('card-mode')
})
appendIcon('cardFlow', function () {
  switchTo('flow-mode')
})
appendIcon('document', function () {
  switchTo('document-mode')
})
appendIcon('download', shareAndDownloadImage)

const toggleCalendarMode = toggleCalendarTimestamp()

export default function initCardifyTheme() {
  hotkeys('alt+shift+1', function (event, handler) {
    event.preventDefault()
    switchTo('card-mode')
  })
  hotkeys('alt+shift+2', function (event, handler) {
    event.preventDefault()
    switchTo('flow-mode')
  })
  hotkeys('alt+shift+3', function (event, handler) {
    event.preventDefault()
    switchTo('document-mode')
  })
  hotkeys('alt+shift+4', function (event, handler) {
    event.preventDefault()
    toggleCalendarMode()
  })
  hotkeys('alt+shift+c', function (event, handler) {
    event.preventDefault()
    toggleCalendarMode()
  })
  hotkeys('alt+shift+5', function (event, handler) {
    event.preventDefault()
    toggleFocusMode()
  })
  hotkeys('alt+shift+f', function (event, handler) {
    event.preventDefault()
    toggleFocusMode()
  })
  hotkeys('alt+shift+d', async function (event, handler) {
    event.preventDefault()
    await shareAndDownloadImage()
  })
  hotkeys('alt+shift+u', async function (event, handler) {
    event.preventDefault()
    document.querySelector('#unlink-finder-icon').click()
  })

  tippy('#mode-button-cardList', {
    content: `Card List<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-1)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })

  tippy('#mode-button-cardFlow', {
    content: `Card Flow<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-2)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })

  tippy('#mode-button-document', {
    content: `Outliner<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-3)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })
  tippy('#mode-toggle-calendar', {
    content: `Calendar<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-4/c)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })
  tippy('#mode-toggle-focus', {
    content: `Focus<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-5/f)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })
  tippy('#mode-button-download', {
    content: `Share Card<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-d)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })
  tippy('#unlink-finder-icon', {
    content: `Find Unlink<sup>mode</sup> <span style="font-size:7pt">(Alt-Shift-u)</span>`,
    allowHTML: true,
    theme: 'light-border',
  })
  console.log('started styled-roam')
}
