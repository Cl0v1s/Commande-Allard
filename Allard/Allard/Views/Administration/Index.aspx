<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="Allard.Views.Administration.Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">

    <div class="panel administration-index">
        <div>
            <h2>Actions</h2>
            <span>
                <a href="/Views/Administration/ArticleCreate.aspx" class="button-base">Rédiger un nouvel article</a>
                <a href="/Views/Administration/GalleryCreate.aspx" class="button-base">Ajouter une nouvelle gallerie</a>
            </span>
        </div>
        <div>
            <h2>Administration des Articles</h2>
            <table>
                <thead>
                    <tr>
                        <td>Titre</td>
                        <td>Date</td>
                        <td>Auteur</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody id="Articles" runat="server">
                </tbody>
            </table>
        </div>
        <div>
            <h2>Administration des galleries</h2>
            <table>
                <thead>
                    <tr>
                        <td>Nom</td>
                        <td>Description</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody id="Galleries" runat="server">
                </tbody>
            </table>
        </div>
    </div>

</asp:Content>
