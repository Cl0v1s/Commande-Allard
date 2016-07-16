<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="ArticleCreate.aspx.cs" Inherits="Allard.Views.Administration.ArticleCreate" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Créer/Modifier un article</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">

    <div class="panel administration-article" title="Créer/Modifier un article">
        <div>
            <h2>Titre</h2>
            <asp:TextBox runat="server" ID="Name" name="title" placeholder="Choisissez un titre pour votre article..." />
        </div>
        <div>
            <h2>Resumé</h2>
            <asp:TextBox runat="server" ID="Resume" name="resume" placeholder="Rédigez un court résumé de ce que raconte l'article..." />
        </div>
        <div>
            <h2>Contenu</h2>
            <asp:TextBox runat="server" ID="Content" placeholder="Vous pouvez rédiger ici le contenu de votre article..." TextMode="MultiLine" Rows="20"></asp:TextBox>
        </div>
        <div>
            <asp:Button runat="server" OnClick="Submit_Click" Text="Envoyer" />
        </div>
    </div>

</asp:Content>
