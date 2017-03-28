<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
<style rel="stylesheet" type="text/css">
table{width:100%;border:1px solid}
th{background-color:#cdd8f6}
td,tr,th{border:1px solid;padding:2px;vertical-align:top}
span{color:green;padding-left:5px}
#x{color:red}
</style>
</head>
<body>
  <h2>Corrección</h2>
  <table>
    <tr>
      <th>Pregunta</th>
      <th>Opción</th>
     
    </tr>
    <xsl:for-each select="questions/question">      
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td>
       <xsl:for-each select="answer">
        <xsl:choose>
         <xsl:when test="../type = 'text'">
          <span><xsl:value-of select="text()"/></span>
         </xsl:when>
        </xsl:choose>         
       </xsl:for-each>
       <xsl:for-each select="option">
         <xsl:variable name="optposition" select="position()-1"/>
        <xsl:value-of select="$optposition+1"/>: <xsl:value-of select="text()"/>
         <xsl:for-each select="../answer">
          <xsl:variable name="correctanswer" select="text()"/>
          <xsl:if test="$optposition=$correctanswer">
            <span>&#x2713;</span>
          </xsl:if>
         </xsl:for-each><br/><br/>
       </xsl:for-each>
      </td>
      
    </tr>
    </xsl:for-each>
  </table>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>