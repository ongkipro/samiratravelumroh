export const dynamic = "force-static";

export async function GET() {
  const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap — Samira Travel Umroh &amp; Haji</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            background: #F8FAFC;
            color: #0F172A;
            padding: 30px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 1040px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 12px;
            box-shadow: 0 4px 20px -2px rgba(8, 66, 52, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04);
            border: 1px solid #E2E8F0;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #084234 0%, #0F5C48 100%);
            color: #FFFFFF;
            padding: 32px;
            position: relative;
          }
          .header-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(197, 160, 89, 0.2);
            color: #E6CA65;
            border: 1px solid rgba(197, 160, 89, 0.4);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 4px 10px;
            border-radius: 20px;
            margin-bottom: 12px;
          }
          h1 {
            font-size: 26px;
            font-weight: 800;
            color: #FFFFFF;
            margin-bottom: 8px;
          }
          .desc {
            font-size: 14px;
            color: #CBD5E1;
            max-width: 780px;
          }
          .desc a {
            color: #E6CA65;
            text-decoration: underline;
          }
          .nav-bar {
            background: #F1F5F9;
            padding: 12px 32px;
            border-bottom: 1px solid #E2E8F0;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
          }
          .nav-bar a {
            color: #084234;
            font-weight: 700;
            text-decoration: none;
          }
          .nav-bar a:hover {
            text-decoration: underline;
          }
          .content {
            padding: 24px 32px;
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            text-align: left;
          }
          th {
            background: #F8FAFC;
            color: #475569;
            font-weight: 700;
            padding: 12px 14px;
            border-bottom: 2px solid #E2E8F0;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
          }
          td {
            padding: 12px 14px;
            border-bottom: 1px solid #F1F5F9;
            color: #334155;
            word-break: break-word;
          }
          tr:hover td {
            background: #F8FAFC;
          }
          td a {
            color: #084234;
            text-decoration: none;
            font-weight: 600;
          }
          td a:hover {
            color: #C5A059;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            background: #E2E8F0;
            color: #475569;
          }
          .priority-high {
            background: #DCFCE7;
            color: #166534;
          }
          .priority-med {
            background: #FEF3C7;
            color: #92400E;
          }
          .img-count {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: #EFF6FF;
            color: #1E40AF;
            padding: 2px 8px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 11px;
          }
          .footer {
            padding: 20px 32px;
            background: #F8FAFC;
            border-top: 1px solid #E2E8F0;
            font-size: 12px;
            color: #64748B;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-badge">All in One SEO Architecture</div>
            <h1>XML Sitemap</h1>
            <p class="desc">
              Peta situs XML resmi untuk <strong>PT Samira Ali Wisata (Samira Travel)</strong>. Dokumen ini dioptimalkan untuk mesin pencari seperti Googlebot, Bingbot, dan Yandex guna memastikan seluruh katalog paket umroh, haji khusus, kantor cabang, dan artikel terindeks secara sempurna.
            </p>
          </div>

          <!-- SITEMAP INDEX VIEW -->
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <div class="nav-bar">
              <span><strong>Tipe:</strong> Sitemap Index Master</span>
              <span>Jumlah Sub-Sitemap: <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> bagian</span>
            </div>
            <div class="content">
              <table id="sitemap-table">
                <thead>
                  <tr>
                    <th style="width: 60%;">Sitemap URL</th>
                    <th style="width: 40%;">Terakhir Diperbarui (Last Modified)</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <xsl:variable name="sitemapURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <tr>
                      <td>
                        <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,1,10),concat(' ', substring(sitemap:lastmod,12,8)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </xsl:if>

          <!-- URLSET VIEW (SUB-SITEMAP) -->
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <div class="nav-bar">
              <a href="/sitemap.xml">&#8592; Kembali ke Sitemap Index Utama</a>
              <span>Jumlah URL: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></span>
            </div>
            <div class="content">
              <table id="sitemap-table">
                <thead>
                  <tr>
                    <th style="width: 45%;">Halaman URL</th>
                    <th style="width: 10%;">Gambar</th>
                    <th style="width: 15%;">Frekuensi</th>
                    <th style="width: 10%;">Prioritas</th>
                    <th style="width: 20%;">Terakhir Diperbarui</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <tr>
                      <td>
                        <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:choose>
                          <xsl:when test="count(image:image) &gt; 0">
                            <span class="img-count"><xsl:value-of select="count(image:image)"/> Img</span>
                          </xsl:when>
                          <xsl:otherwise>
                            <span style="color: #94A3B8;">-</span>
                          </xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td>
                        <span class="badge"><xsl:value-of select="sitemap:changefreq"/></span>
                      </td>
                      <td>
                        <xsl:variable name="p" select="sitemap:priority"/>
                        <xsl:choose>
                          <xsl:when test="$p &gt;= 0.8">
                            <span class="badge priority-high"><xsl:value-of select="$p"/></span>
                          </xsl:when>
                          <xsl:otherwise>
                            <span class="badge priority-med"><xsl:value-of select="$p"/></span>
                          </xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,1,10),concat(' ', substring(sitemap:lastmod,12,8)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </xsl:if>

          <div class="footer">
            <span>&#169; 2026 PT Samira Ali Wisata. Izin Resmi Umroh PPIU No. 137/2020 &amp; PIHK 2022.</span>
            <span>All in One SEO Compatible Sitemap</span>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new Response(xsl, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
