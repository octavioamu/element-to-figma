<template>
  <div class="content">
    <img
      src="/images/popup/logo.png"
      alt="Element to Figma"
      class="logo"
      width="300"
    />
    <p>
      Click "ENABLE SELECTOR" and select the elements on the page you want to
      download.
    </p>
    <button class="btn" @click="enableSelector()">Enable Selector</button>
    <p>
      Figma Plugin
      <a
        target="_blank"
        href="https://www.figma.com/community/plugin/747985167520967365/"
        >HTML &lt;-&gt; Figma</a
      >
    </p>

    <div class="footer">
      <p>
        <a href="https://github.com/octavioamu/element-to-figma">Repo</a> |
        <a href="https://github.com/octavioamu/element-to-figma/issues"
          >Report issues</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    check() {
      console.log("test", chrome);
      // alert('asas')
      chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        const activeTab = tabs[0];
        if (activeTab) {
          if (activeTab.url) {
            if (activeTab.url.startsWith("https://chrome.google.com")) {
              this.error =
                "You can't run this extension in the Chrome web store itself, please try another URL";
            }
          }
        }
      });
    },
    enableSelector() {
      this.enabled = !this.enabled;
      // document.location.reload
      chrome.runtime.sendMessage({ inject: true }, response => {
        window.close();

        // this.loading = false;
        // this.done = true;
      });
    }
  },
  mounted() {
    this.check();
  }
};
</script>

<style lang="scss" scoped>
.logo {
  margin: auto;
  display: block;
}
.content {
  min-width: 360px;
  padding: 1em;
  text-align: center;
}
p {
  color: #585858;
  font-size: 14px;
  line-height: 1.5em;
}
.footer {
  text-align: center;
}
.btn {
  background-color: #fff;
  padding: 0.8em 2em;
  display: block;
  margin: auto;
  border-radius: 7px;
  text-transform: uppercase;
  color: #3c3c3c;
  border: 2px solid #3c3c3c;
  cursor: pointer;
}

.btn:hover {
  background-color: #3c3c3c;
  color: #fff;
}
</style>
