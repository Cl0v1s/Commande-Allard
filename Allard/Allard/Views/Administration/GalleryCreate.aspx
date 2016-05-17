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
    <div id="EditEntries" runat="server">
        <h2>Ajouter/Supprimer/modifier des entrées</h2>
        <table>
            <thead>
                <tr>
                    <td>
                        Titre
                    </td>
                    <td>
                        Description
                    </td>
                    <td>
                        Url image
                    </td>
                    <td>
                        Actions
                    </td>
                </tr>
            </thead>
            <tbody id="Entries" runat="server">
                <!--Ajouter ici les entrées-->
                <tr id="AddEntryRow" runat="server">
                    <td>
                        <asp:TextBox ID="AddEntryTitle" runat="server"></asp:TextBox>
                    </td>
                    <td>
                        <asp:TextBox ID="AddEntryDescription" runat="server"></asp:TextBox>
                    </td>
                    <td>
                        <asp:TextBox ID="AddEntryPicture" runat="server"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Button ID="AddEntry" runat="server" Text="Ajouter une entrée" OnClick="AddEntry_Click" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <asp:Button ID="SendButton" runat="server" OnClick="SendButton_Click"  Text="Envoyer" />
    </div>
</asp:Content>
