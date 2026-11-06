# yinruibio.com（宁波胤瑞 / Ningbo Inarray，CarryOn 便携 PCR，兽医诊断）

> 缘波 11/1 接管，客户未付费，询盘只发缘波。
> 跨站数据和每周改动清单在总控 `~/AI项目/factory-dashboard-toolkit` 排，确认后才在这里改。

## 基本配置
- 技术栈：Next.js static export（`output: "export"`, `trailingSlash: true`），产物在 `out/`
- CF Pages 项目：`yinruibio-com`（Vivian 主账号）
- toolkit slug：`yinrui`；GA4：`G-D7TJNYWJQZ`；IndexNow key：`2067205d69774dbd96ca9e5f2a7dc1c0`
- 表单 tenant：`yinrui`；WhatsApp 由 `WhatsAppTracker` 组件统一追踪，新链接无需单独埋点
- 语言：en/zh/ja/vi 上线；pt 已翻译未发布（`src/lib/i18n.ts` 的 `activeLocales` 控制）
- 目标市场：越南、巴西、泰国、美国、德国、日本——越南语内容按 vi 当地词写（例：ASF 指南 vi 为主）

## 部署 = push main
- `.github/workflows/deploy.yml`：push 到 main 自动 `npm run build` → `pages deploy out --branch main`
- ⚠️ **CI 不跑 sitemap 生成**。新增/删除页面时，本地先 `npm run build && node scripts/gen-sitemap.mjs`，把更新后的 `public/sitemap.xml` 一起提交，再 push
- push 前本地跑一次闸门：`python3 -I ~/.claude/skills/site-launch/site-gate.py out yinruibio.com --tenant yinrui`
- 内容可以先在 `content/<日期>-<slug>` 分支写，确认后合并 main 才上线
- 上线后 IndexNow + `factory-toolkit log`

## 站点规则
- DeepSeek key 从 Keychain 读（`deepseek-api`），翻译缓存在 `scripts/i18n-cache`
- 不写未经客户确认的认证、检测性能数字；医疗/兽医诊断类声称要保守
- 写博客前先查关键词打架
