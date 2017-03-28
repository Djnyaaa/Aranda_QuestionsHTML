<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="../cs/xsl.css" />
			</head>
			<body>
				<div id="titulo"><img src="../multimedia/soluciones.png" alt="Preguntas absurdas" id="titulo"></img></div>
				<table id="center">
					<tr >
						<th>Title</th>
						<th>Option</th>
						<th>Answer</th>
					</tr>
					<xsl:for-each select="questions/question">
						<tr>
							<td><xsl:value-of select="title"/></td>
							<td>
								<xsl:for-each select="option">
									<xsl:value-of select="position()-1"/>: <xsl:value-of select="text()"/><br/>
								</xsl:for-each>
							</td>
							<td>
								<xsl:for-each select="answer">
									<xsl:value-of select="text()"/><br/>
								</xsl:for-each>       
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
	
</xsl:stylesheet>