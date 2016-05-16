<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="GalleryCreate.aspx.cs" Inherits="Allard.Views.Administration.GalleryCreate" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <h1>Créer une nouvelle gallerie</h1>
    <div>
        <h2>Nom de la gallerie</h2>
        <asp:TextBox ID="NameField" runat="server"></asp:TextBox>
    </div>
    <div>
        <h2>Description de la gallerie</h2>
        <asp:TextBox ID="DescriptionField" runat="server"></asp:TextBox>
    </div>
    <div>
        <asp:Button ID="SendButton" runat="server" OnClick="SendButton_Click" />
    </div>
</asp:Content>
