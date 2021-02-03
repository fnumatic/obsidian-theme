# Personal Theme for Obsidian
A light theme for Obsidian.md, based on *Red Graphite for Obsidian*. 

## Motivation

Just a proof of concept, can you do this with tailwind...
Did some minor tweaks. 
No dark sidebar and subtle change in margins / paddings.


## Manual Install
1. Download obsidian.css to your Obsidian vault folder.
1. In Obsidian, click the **Settings** icon
1. Go to **Appearance** and enable **Apply custom CSS**



## Made with Tailwind CSS

The file ./tw/style.css acts as source.
The obsidian.css file will be generated.
The target is not as dry as it could be and full of comments.

```
# for oneshot compile
npm run-script tw

# for automatic compile
npm run-script watch:css
```




